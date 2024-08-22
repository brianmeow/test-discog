import { defineConfig,loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.GRAPHQL_ENDPOINT': JSON.stringify(env.GRAPHQL_ENDPOINT),
      'process.env.GITHUB_ACCESS_TOKEN': JSON.stringify(env.GITHUB_ACCESS_TOKEN)
    },
    plugins: [react()],
  }
})