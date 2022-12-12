import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { DataGrid } from "mantine-data-grid";
import { useState } from "react";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <DataGrid
          highlightOnHover
          withGlobalFilter
          withSorting
          fontSize="sm"
          verticalSpacing="xs"
          data={[{ id: 1, test: "Test" }, { id: 2, test: "Test" }]}
          columns={[
            {
              header: "Modelo",
              accessorFn: (row) => row.test,
            },
          ]}
        />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
