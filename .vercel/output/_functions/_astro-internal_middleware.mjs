import { d as defineMiddleware, s as sequence } from './chunks/index_aA4jym51.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CxhWdi-A.mjs';
import 'kleur/colors';
import './chunks/astro/server_DFe_VQT-.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware((_, next) => next());

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
