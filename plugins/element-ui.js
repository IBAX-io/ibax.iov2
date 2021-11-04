/*
 * @Author: abc
 * @Date: 2021-08-16 11:14:27
 * @LastEditors: abc
 * @LastEditTime: 2021-10-21 16:21:01
 * @Description:
 */
import Vue from 'vue';
import {
  PageHeader,
  Header,
  Footer,
  Timeline,
  TimelineItem,
  Main,
  Scrollbar,
  MessageBox,
  Loading,
  Message,
  Input,
  InputNumber,
  Row,
  Col,
  Button,
  Backtop,
  Container,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Icon,
  Notification,
  Tabs,
  TabPane,
  Select,
  Option,
  OptionGroup,
  Pagination,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Card
} from 'element-ui';

Vue.use(Scrollbar);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(Loading.directive);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Pagination);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Card);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
