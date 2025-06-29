import { date, z } from 'zod'


export const loginFormSchema = z.object({
	email: z.string().email('Email không hợp lệ'),
	password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});


export const signupFormSchema = z.object({
    username: z
    .string()
    .min(3, 'Tên đăng nhập phải có ít nhất 3 ký tự')
    .max(50, 'Tên đăng nhập không được quá 50 ký tự')
    .regex(/^[a-zA-Z0-9_]+$/, 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới'),
    email: z.string().email('Email không hợp lệ'),
    phone: z.string().regex(/^(0|\+84)(\d{9,11})$/, 'Số điện thoại không hợp lệ (phải bắt đầu bằng 0 hoặc +84 và có từ 9 đến 11 số)'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirmpassword: z.string(),
}).refine((data) => data.password === data.confirmpassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
})


export const userInfoSchema = z.object({
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



