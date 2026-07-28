// src/components/ZodRegistrationForm.tsx

import { useState } from 'react'
import { z }        from 'zod'

const RegisterSchema = z.object({
  fullName:  z.string().min(2, 'Mínimo 2 caracteres'),
  email:     z.string().email('Introduce un email válido'),
  password:  z.string()
    .min(8, 'Mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número'),
  confirm:   z.string(),
  role:      z.enum(['agente', 'propietario', 'comprador']),
  birthYear: z.number({ error: 'Debe ser un número' })
    .int('Debe ser un año completo')
    .min(1900, 'Año inválido')
    .max(new Date().getFullYear() - 18, 'Debes ser mayor de edad'),
}).refine(
  (data) => data.password === data.confirm,
  { message: 'Las contraseñas no coinciden', path: ['confirm'] }
)

type RegisterFormData = z.infer<typeof RegisterSchema>

type FormErrors = Partial<Record<keyof RegisterFormData, string>>

const INITIAL_VALUES: RegisterFormData = {
  fullName:  '',
  email:     '',
  password:  '',
  confirm:   '',
  role:      'comprador',
  birthYear: 2000,
}

export default function ZodRegistrationForm() {
  const [values, setValues] = useState<RegisterFormData>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  function handleChange<K extends keyof RegisterFormData>(
    field: K,
    value: RegisterFormData[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const result = RegisterSchema.safeParse(values)

    if (!result.success) {
      const zodErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RegisterFormData
        if (field && !zodErrors[field]) {
          zodErrors[field] = issue.message
        }
      }
      setErrors(zodErrors)
      return
    }

    console.log('Datos validados:', result.data)
    setSuccess(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}
    >
      {success && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          ✅ Registro completado
        </div>
      )}

      <FormField
        label="Nombre y apellido"
        value={values.fullName}
        error={errors.fullName}
        placeholder="Carlos Mendoza"
        onChange={(v) => handleChange('fullName', v)}
      />

      <FormField
        label="Correo electrónico"
        type="email"
        value={values.email}
        error={errors.email}
        placeholder="contacto@inmobiliaria.com"
        onChange={(v) => handleChange('email', v)}
      />

      <FormField
        label="Contraseña"
        type="password"
        value={values.password}
        error={errors.password}
        placeholder="Mín. 8 caracteres, 1 mayúscula, 1 número"
        onChange={(v) => handleChange('password', v)}
      />

      <FormField
        label="Confirmar contraseña"
        type="password"
        value={values.confirm}
        error={errors.confirm}
        placeholder="Repite la contraseña"
        onChange={(v) => handleChange('confirm', v)}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>Tipo de usuario</label>
        <select
          value={values.role}
          onChange={(e) =>
            handleChange('role', e.target.value as RegisterFormData['role'])
          }
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="comprador">Comprador</option>
          <option value="propietario">Propietario</option>
          <option value="agente">Agente</option>
        </select>
        {errors.role && <p style={errorStyle}>{errors.role}</p>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>
          Año de nacimiento
        </label>
        <input
          type="number"
          value={values.birthYear}
          onChange={(e) => handleChange('birthYear', Number(e.target.value))}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        {errors.birthYear && <p style={errorStyle}>{errors.birthYear}</p>}
      </div>

      <button
        type="submit"
        style={{
          padding: '10px', background: '#0070f3', color: '#fff',
          border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 500,
        }}
      >
        Registrar cuenta
      </button>
    </form>
  )
}

interface FormFieldProps {
  label:        string
  value:        string
  error?:       string
  placeholder?: string
  type?:        string
  onChange:     (value: string) => void
}

function FormField({ label, value, error, placeholder, type = 'text', onChange }: FormFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '8px 12px', fontSize: 14,
          border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
          borderRadius: 6,
        }}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  )
}

const errorStyle = { margin: 0, fontSize: 12, color: '#ef4444' }