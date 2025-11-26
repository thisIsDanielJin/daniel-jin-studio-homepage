import React from "react";

type SectionProps = {
    children: React.ReactNode;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
};

export const Section: React.FC<SectionProps> = ({
    children,
    id,
    className,
    style,
}) => {
    return (
        <section
            id={id}
            className={className}
            style={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                ...style,
            }}
        >
            {children}
        </section>
    );
};

export default Section;
