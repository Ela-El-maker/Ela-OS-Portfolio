declare module 'next-connect' {
	import { NextApiRequest, NextApiResponse } from 'next';

	type NextHandler = (err?: unknown) => void | Promise<void>;

	type Middleware<Req = NextApiRequest, Res = NextApiResponse> = (
		req: Req,
		res: Res,
		next: NextHandler
	) => void | Promise<unknown>;

	interface Options<Req, Res> {
		onError?: (err: unknown, req: Req, res: Res, next: NextHandler) => void;
		onNoMatch?: (req: Req, res: Res) => void;
	}

	interface Handler<Req, Res> extends Middleware<Req, Res> {
		use: (...handlers: Middleware<Req, Res>[]) => this;
		get: (...handlers: Middleware<Req, Res>[]) => this;
		post: (...handlers: Middleware<Req, Res>[]) => this;
		put: (...handlers: Middleware<Req, Res>[]) => this;
		delete: (...handlers: Middleware<Req, Res>[]) => this;
		patch: (...handlers: Middleware<Req, Res>[]) => this;
	}

	export default function nextConnect<Req = NextApiRequest, Res = NextApiResponse>(
		options?: Options<Req, Res>
	): Handler<Req, Res>;
}
