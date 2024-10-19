import React from "react";

export default function ButtonPrimary({
    className,
    ...props
}: React.ComponentProps<'button'>) {
    return (
        <button
            className={`rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 ${className}`}
            {...props}
        />
    )
}