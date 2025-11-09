/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Note: For embedded studios in Next.js, you need to manually register
// your Netlify URL (https://nextjs-sanity-starter-kit.netlify.app/studio)
// as a valid studio URL in the Sanity management console.
export default defineCliConfig({ api: { projectId, dataset } })
