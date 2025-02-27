"use client";

import { ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children, ...props }: ComponentProps<typeof NextThemesProvider>) => (
	<NextThemesProvider {...props}>{children}</NextThemesProvider>
);

export { ThemeProvider };
