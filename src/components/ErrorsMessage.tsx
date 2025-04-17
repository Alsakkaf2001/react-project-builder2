interface IProps{
msg:string;
}

const ErrorsMessage = ({ msg }: IProps) => {
  return msg? <span className="block text-red-600 text-sm">{msg}</span> : null;
}

export default ErrorsMessage