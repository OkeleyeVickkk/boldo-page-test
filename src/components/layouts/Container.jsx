export function Container({ children, mediaquery = "xl:w-11/12" }) {
	return <div className={`w-full sm:w-11/12 px-3 mx-auto ${mediaquery}`}>{children}</div>;
}
