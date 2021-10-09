import {
	extendTheme,
	theme as base,
	withDefaultColorScheme,
	withDefaultVariant,
} from "@chakra-ui/react";

const inputSelectStyles = {
	variants: {
		filled: {
			field: {
				_focus: {
					borderColor: "brand.500",
				},
			},
		},
	},
};

const theme = extendTheme(
	{
		colors: {
			brand: {
				50: "#F3F4FE",
				100: "#C3C9F8",
				200: "#ABB4F5",
				300: "#939EF2",
				400: "#6F7EED",
				500: "#586AEA",
				600: "#4356E8",
				700: "#2E44E5",
				800: "#1C33E1",
				900: "#12208F",
			},
		},
		fonts: {
			heading: `Montserrat, ${base.fonts?.heading}`,
			body: `Inter, ${base.fonts?.body}`,
		},
		components: {
			Button: {
				variants: {
					solid: {
						_focus: {
							ring: 2,
							ringColor: "brand.100",
						},
						_active: {
							backgroundColor: "brand.700",
						},
					},
				},
			},
			Input: { ...inputSelectStyles },
			Select: { ...inputSelectStyles },
			Checkbox: {
				baseStyle: {
					control: {
						_focus: {
							ring: 2,
							ringColor: "brand.500",
						},
					},
				},
			},
		},
	},
	withDefaultColorScheme({
		colorScheme: "brand",
		components: ["Checkbox"],
	}),
	withDefaultVariant({
		variant: "filled",
		components: ["Input", "Select"],
	})
);

export default theme;
