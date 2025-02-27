
export default {
  logo: <span>SoulSMP</span>,
  project: {
    link: 'https://github.com/yourgithubname/SoulSMP',
  },
  docsRepositoryBase: 'https://github.com/yourgithubname/SoulSMP',
  footer: {
    text: <span>© {new Date().getFullYear()} SoulSMP</span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SoulSMP'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SoulSMP" />
      <meta property="og:description" content="SoulSMP Minecraft Server" />
    </>
  ),
}
