// Components
import { ListMenu } from '../components'

// StyleGuide
import componentMap from '../styleguide'

// Layout
import { DefaultLayout } from '../layouts'

// Helpers
import { capitalize } from '@btna/helpers'

const defaultTab = 'select'

// Code
const Index = ({query}) => {
  const DynamicComponent = componentMap[capitalize(query.cat || defaultTab)]

  const genLinks = () => {
    return [
      {name: 'Base', target: '/?cat=base' },
      {name: 'Typography', target: '/?cat=typography' },
      {name: 'Icons', target: '/?cat=icons' },
      {name: 'Inputs', target: '/?cat=inputs' },
      {name: 'Buttons', target: '/?cat=buttons' },
      {name: 'Checkbox and Radio', target: '/?cat=checkboxradio' },
      {name: 'Select', target: '/?cat=select' },
      {name: 'List', target: '/?cat=list' },
      {name: 'Grid', target: '/?cat=grid' },
      {name: 'Media', target: '/?cat=media' },
      {name: 'Others', target: '/?cat=others' },
      {
        name: 'Sub Menu',
        child: [
          {name: 'a', target: '/' },
          {name: 'b', target: '/' }
        ]
      }
    ]
  }

  return (
    <DefaultLayout
      pageTitle='TNA Elements'
      leftPanel={<ListMenu list={genLinks()} query={query} queryTarget='cat' queryDefault={defaultTab} />}
    >
      {DynamicComponent && <DynamicComponent />}
    </DefaultLayout>
  )
}

// Initial Props
Index.getInitialProps = ({ query }) => {
  return {query: query}
}

// Connect and export
export default Index;
