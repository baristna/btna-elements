// Package
import { connect } from 'react-redux'

// Elements
import { Button } from '../elements'

// Actions
import {
  changeTheme
} from '../actions'

// Code
const ThemeButtonComponent = ({theme, changeThemeHandler}) => {
  return (
    <Button
      onClick={() => changeThemeHandler(theme == 'light' ? 'dark' : 'light')}
      height='fill'
      type='ghost'
      width='wide'
    >
      {(theme == 'light' ? 'dark' : 'light')} Theme
    </Button>
  )
}

// Map to props
const mapStateToProps = ({theme}) => ({
  theme: theme
})

const mapDispatchToProps = {
  changeThemeHandler: changeTheme
}

// Export
export const ThemeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeButtonComponent);
