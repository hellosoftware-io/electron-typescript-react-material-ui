import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  dob: yup.string().required('Data de Nascimento é obrigatória'),
  cpf: yup.string().required('CPF é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  zipcode: yup.string().required('CEP é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  username: yup.string().required('Nome de Usuário é obrigatório'),
  ipProxy: yup.string().required('IP do Proxy é obrigatório'),
});
