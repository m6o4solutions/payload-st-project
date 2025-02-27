import type { FieldHook } from "payload";

const populateFullName: FieldHook = async ({ data }) => {
	return `${data?.firstName} ${data?.lastName}`;
};

export { populateFullName };
