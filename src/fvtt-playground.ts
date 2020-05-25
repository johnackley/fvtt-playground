/**
 * Quantum Playground to learn FVTT development
 * Author: John Ackley
 * Content License: none.
 * Software License: none.
 */

// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('fvtt-playground | Initializing fvtt-playground');
	
	// Assign custom classes and constants here
	
	// Register custom module settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	console.log('fvtt-playground | setup');
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	console.log('fvtt-playground | ready');
});

// Add any additional hooks if necessary
Hooks.on('pauseGame', function() {
	console.log('fvtt-playground | pauseGame');
})

Hooks.on('renderChatMessage', function() {
	console.log('fvtt-playground | pauseGame');
})

Hooks.on('targetToken', function() {
	console.log('fvtt-playground | targetToken');
})

Hooks.on('chatMessage', function() {
	console.log('fvtt-playground | chatMessage');
})
