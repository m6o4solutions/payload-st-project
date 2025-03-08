import type { Access, AccessResult, FieldAccess } from "payload";
import type { User } from "@/payload-types";

const isAdmin: Access<User> = ({ req: { user } }) => {
	// return true or false based on if the user has an admin role
	return Boolean(user?.roles?.includes("admin"));
};

const isAdminFieldLevel: FieldAccess<{ id: string }, User> = ({ req: { user } }) => {
	// return true or false based on if the user has an admin role
	return Boolean(user?.roles?.includes("admin"));
};

const isAdminOrHasSiteAccess =
	(siteIDFieldName: string = "site"): Access =>
	({ req: { user } }) => {
		// need to be signed in
		if (user) {
			// if user has role of 'admin'
			if (user.roles?.includes("admin")) return true;

			// if user has role of 'editor' and has access to a site,
			// return a query constraint to restrict the documents this user can edit
			// to only those that are assigned to a site, or have no site assigned
			if (user.roles?.includes("editor") && user.sites!.length > 0) {
				// otherwise, we can restrict it based on the `site` field
				return {
					or: [
						{
							[siteIDFieldName]: {
								in: user.sites,
							},
						},
						{
							[siteIDFieldName]: {
								exists: false,
							},
						},
					],
				};
			}
		}

		// reject everyone else
		return false;
	};

const isAdminOrHasSiteAccessOrPublished: Access = ({ req: { user } }) => {
	// need to be signed in
	if (user) {
		// if user has role of 'admin'
		if (user.roles?.includes("admin")) return true as AccessResult;

		// if user has role of 'editor' and has access to a site,
		// return a query constraint to restrict the documents this user can edit
		// to only those that are assigned to a site, or have no site assigned
		if (user.roles?.includes("editor") && user.sites!.length > 0) {
			return {
				or: [
					{
						site: {
							in: user.sites,
						},
					},
					{
						site: {
							exists: false,
						},
					},
				],
			} as AccessResult;
		}
	}

	// non-signed in users can only read published docs
	return {
		_status: {
			equals: "published",
		},
	} as AccessResult;
};

const isAdminOrSelf: Access = ({ req: { user } }) => {
	// need to be signed in
	if (user) {
		// if user has role of 'admin'
		if (user.roles?.includes("admin")) {
			return true;
		}

		// if any other type of user, only provide access to their data
		return {
			id: {
				equals: user.id,
			},
		};
	}

	// reject everyone else
	return false;
};

const isAuthenticated: Access<User> = ({ req: { user } }) => {
	// return true if user is authenticated, false if not
	return Boolean(user);
};

const isPublic: Access = () => true;

const isRestricted: Access = () => false;

export {
	isAdmin,
	isAdminFieldLevel,
	isAdminOrHasSiteAccess,
	isAdminOrHasSiteAccessOrPublished,
	isAdminOrSelf,
	isAuthenticated,
	isPublic,
	isRestricted,
};
