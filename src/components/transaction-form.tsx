import { useRef, useEffect } from "react";
import { Box, TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

interface FormItem {
	label: string;
	total: string;
}

interface FormProps {
	onSubmit: ({ label, total }: FormItem) => void;
}

export default function TransactionForm({ onSubmit }: FormProps) {
	const firstInputRef = useRef<HTMLInputElement>(null);

	const focusOnFirstInput = () => firstInputRef?.current?.focus();

	const form = useForm({
		initialValues: {
			label: "",
			total: "",
		},
	});

	const submitAndReset = (state: any) => {
		onSubmit(state);
		form.reset();
		focusOnFirstInput();
	};

	useEffect(() => {
		focusOnFirstInput();
	}, []);

	return (
		<form onSubmit={form.onSubmit(submitAndReset)}>
			<Box mt="md">
				<TextInput
					required
					label="Label"
					placeholder="Enter text..."
					size="lg"
					ref={firstInputRef}
					{...form.getInputProps("label")}
				/>
			</Box>
			<Box mt="md">
				<TextInput
					required
					label="Total"
					placeholder="Enter total..."
					size="lg"
					{...form.getInputProps("total")}
				/>
			</Box>
			<Box mt="md">
				<Button type="submit" size="lg" fullWidth>
					Add transaction
				</Button>
			</Box>
		</form>
	);
}
