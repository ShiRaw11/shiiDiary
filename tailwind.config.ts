import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			background: '#0F172A',
			teal:"#66b2b2", // rgb(15, 23, 42) -> slate-900
			foreground: '#F1F5F9', // rgb(241, 245, 249) -> slate-100
			card: {
			  DEFAULT: '#172554', // rgb(23, 37, 84) -> blue-950
			  foreground: '#F1F5F9' // rgb(241, 245, 249) -> slate-100
			},
			popover: {
			  DEFAULT: '#172554', // rgb(23, 37, 84) -> blue-950
			  foreground: '#F1F5F9' // rgb(241, 245, 249) -> slate-100
			},
			primary: {
			  DEFAULT: '#2563EB', // rgb(37, 99, 235) -> blue-600
			  foreground: '#F1F5F9' // rgb(241, 245, 249) -> slate-100
			},
			secondary: {
			  DEFAULT: '#93C5FD', // rgb(147, 197, 253) -> blue-300
			  foreground: '#0F172A' // rgb(15, 23, 42) -> slate-900
			},
			muted: {
			  DEFAULT: '#334155', // rgb(51, 65, 85) -> slate-700
			  foreground: '#94A3B8' // rgb(148, 163, 184) -> slate-400
			},
			accent: {
			  DEFAULT: '#93C5FD', // rgb(147, 197, 253) -> blue-300
			  foreground: '#0F172A' // rgb(15, 23, 42) -> slate-900
			},
			destructive: {
			  DEFAULT: '#EF4444', // rgb(239, 68, 68) -> red-500
			  foreground: '#F1F5F9' // rgb(241, 245, 249) -> slate-100
			},
			border: '#93C5FD', // rgb(147, 197, 253) -> blue-300
			input: '#93C5FD', // rgb(147, 197, 253) -> blue-300
			ring: '#F1F5F9', // rgb(241, 245, 249) -> slate-100
			chart: {
			  '1': '#FF6384', // Example values for charts
			  '2': '#36A2EB',
			  '3': '#FFCE56',
			  '4': '#4BC0C0',
			  '5': '#9966FF'
			}
		  },
		  borderRadius: {
			lg: '0.5rem', // Example for radius
			md: 'calc(0.5rem - 2px)',
			sm: 'calc(0.5rem - 4px)'
		  }
		}
		  
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
