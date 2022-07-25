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
	const form = useForm({
		initialValues: {
			label: "",
			total: "",
		},
	});

	return (
		<form onSubmit={form.onSubmit(onSubmit)}>
			<Box mt="md">
				<TextInput
					required
					label="Label"
					placeholder="Enter text..."
					size="lg"
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
