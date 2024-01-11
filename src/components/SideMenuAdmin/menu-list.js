import LoupeOutlinedIcon from '@mui/icons-material/LoupeOutlined'
import NoFoodOutlinedIcon from '@mui/icons-material/NoFoodOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

import paths from '../../constants/paths'

const listLinks = [
  { id: 1, label: 'Pedidos', link: paths.Order, icon: ShoppingBagOutlinedIcon },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: NoFoodOutlinedIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: LoupeOutlinedIcon
  }
]

export default listLinks
