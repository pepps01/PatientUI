import moment from 'moment';
import * as Yup from 'yup';

const passwordRegex: any =
  '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';

// const phoneRegExp: any = '^(?:d{2}-d{3}-d{3}-d{3}|d{11})$';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  lastName: Yup.string()
    .trim()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Required'),
  dob: Yup.string()
    .required('DOB is Required')
    .test(
      'DOB',
      'Please choose a valid date of birth',
      birthday => moment().diff(moment(birthday), 'years') >= 18,
    ),
  password: Yup.string()
    .trim()
    .matches(
      passwordRegex,
      'Password must be at least 6 characters long and contain at least one number, one uppercase and one lowercase letter',
    )
    .required('Required'),
  gender: Yup.string()
    .oneOf(['Male', 'Female'])
    .required('Please select your gender'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Required'),
  password: Yup.string().required('Required'),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
});

export const PasswordResetSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .matches(
      passwordRegex,
      'Password must be at least 6 characters long and contain at least one number, one uppercase and one lowercase letter',
    )
    .required('Required'),
  c_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Required'),
});

export const ProfileUpdateSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  lastName: Yup.string()
    .trim()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  address: Yup.string().trim().required('Please enter your address'),
  phone: Yup.string().trim().required('Required'),
  gender: Yup.string()
    .oneOf(['Male', 'Female'])
    .required('Please select your gender'),
  dob: Yup.string()
    .required('DOB is Required')
    .test(
      'DOB',
      'Please choose a valid date of birth',
      birthday => moment().diff(moment(birthday), 'years') >= 18,
    ),
});

export const ProfileKYCSchema = Yup.object().shape({
  // documentType: Yup.mixed()
  //   // .required('You need to provide a file')
  //   .test('fileSize', 'File size too large, max file size is 1 Mb', file => {
  //     if (file) {
  //       return file.size <= 1100000;
  //     } else {
  //       return true;
  //     }
  //   })
  //   .test(
  //     'fileType',
  //     'Incorrect file type',
  //     file =>
  //       file &&
  //       [
  //         'image/png',
  //         'image/jpg',
  //         'image/jpeg',
  //         'application/pdf',
  //         'application/msword',
  //       ].includes(file.type),
  //   ),
  documentNumber: Yup.string(),
  BVN: Yup.string(),
});
