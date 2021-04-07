// Packages
import { connect } from 'react-redux'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { highlightLight, highlightDark } from '../_config';

// Code
const CodeHighlightComponent = ({children, theme}) => {
  let highlightTheme = theme == 'light' ? highlightLight : highlightDark
  return <SyntaxHighlighter language="javascript" style={highlightTheme}>
    {children}
  </SyntaxHighlighter>

}

// Map to props
const mapStateToProps = ({theme}) => ({
  theme: theme
})

export const CodeHighlight = connect(
  mapStateToProps
)(CodeHighlightComponent)
