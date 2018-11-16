import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListPreview = () => (
    //this is just a placeholder now
    //it will be populated from the list file
  <List animated verticalAlign='middle'>
    <List.Item>
      {/* <Image avatar src='/images/avatar/small/helen.jpg' /> */}
      <List.Content>
        <List.Header>Helen</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src='/images/avatar/small/christian.jpg' /> */}
      <List.Content>
        <List.Header>Christian</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src='/images/avatar/small/daniel.jpg' /> */}
      <List.Content>
        <List.Header>Daniel</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

const mapState = state => {

}
export default ListPreview