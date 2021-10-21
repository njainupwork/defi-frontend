import menuConfig from 'components/Menu/config/config'
import { getActiveMenuItem, getActiveSubMenuItem } from 'components/Menu/utils'

const mockT = (key) => key

describe('getActiveMenuItem', () => {
  it('should return an active item', () => {
    // Given
    const pathname = '/'

    // When
    const result = getActiveMenuItem({ pathname, menuConfig: menuConfig(mockT) })

    // Then
    expect(result).toEqual(menuConfig(mockT)[0])
  })

  it('should return an active item if pathname found in subitems', () => {
    // Given
    const pathname = '/dashboard'

    // When
    const result = getActiveMenuItem({ pathname, menuConfig: menuConfig(mockT) })

    // Then
    expect(result).toEqual(menuConfig(mockT)[1])
  })

  it('should not return an item that only includes pathname but not starts with', () => {
    // Given
    const pathname = '/swap'

    // When
    const result = getActiveMenuItem({ pathname, menuConfig: menuConfig(mockT) })

    // Then
    expect(result).toEqual(menuConfig(mockT)[2])
  })
})
