// tslint disable

export default ({ users }) => (
  <Container>
    <Header users={users} />
    <Content users={users}>
      <Table users={users}>
        {users.map(User => (
          <User user={user} />
        ))}
      </Table>
    </Content>
    <Sidebar users={users} />
  </Container>
);
