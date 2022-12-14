import type { ReactNode } from 'react';
type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

const Main = (props: IMainProps) => {
    return (
        <main>
            {props.meta}
            {props.children}
        </main>
    );
};

export default Main;
