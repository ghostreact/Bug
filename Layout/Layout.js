import { Box } from "./Box.js"

export const Layout = ({children}) => (
    <Box css={{
        mawW : "100%"
    }}>
        {children}
    </Box>
)