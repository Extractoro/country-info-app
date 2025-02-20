import {PropsWithChildren} from "react";

const Container = ({children}: PropsWithChildren) => {
    return (
        <div className='container px-4 mx-auto'>{children}</div>
    )
}
export default Container
