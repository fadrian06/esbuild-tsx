declare module '*.svg' {
	const svg: `data:image/svg+xml,${string}`
	export default svg
}

declare module '*.module.css' {
	const styles: { [key: string]: string }
	export default styles
}

declare let isDevelopment: boolean
declare interface LiveReloadChangeEvent {
	added: string[]
	removed: string[]
	updated: string[]
}
