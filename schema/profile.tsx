import { z } from 'zod'


export const profileFormSchema = z.object({
    username: z
    .string()
    .min(3, 'Tên đăng nhập phải có ít nhất 3 ký tự')
    .max(50, 'Tên đăng nhập không được quá 50 ký tự')
    .regex(/^[a-zA-Z0-9_]+$/, 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới'),
    email: z.string().email('Email không hợp lệ'),
    phone: z.string().regex(/^(0|\+84)(\d{9,11})$/, 'Số điện thoại không hợp lệ (phải bắt đầu bằng 0 hoặc +84 và có từ 9 đến 11 số)'),
    dateOfBirth: z.date().refine((date) => date <= new Date(), {
        message: 'Ngày sinh không hợp lệ',
    }),
})