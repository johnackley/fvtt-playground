export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/fvtt-playground/templates"
	];

	return loadTemplates(templatePaths);
}
