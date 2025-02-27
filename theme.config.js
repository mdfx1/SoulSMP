
export default {
  logo: <span>Soul SMP</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Soul SMP Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Soul SMP'
    }
  }
}
