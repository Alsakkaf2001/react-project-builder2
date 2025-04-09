import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{ // FOR {...rest}
 children: ReactNode;
 className?: string;
 width?:"w-full"| "w-fit";
}

function Button({children, className ,width, ...rest}:IProps) { // if you want to add more event like onclik
  return (
    <button className={`${className} ${width} rounded-md cursor-pointer hover:bg-slate-600 hover:mb-1 p-2"`} {...rest}>
      {children}
    </button>
  )
}

export default Button