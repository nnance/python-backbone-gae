<div class="container">

  <h1>Welcome to Notes!</h1>

  <p>Hello, <b><%=nickname%></b> - <a href="<%=logout_url%>">Logout</a> </p>

  <form action="" method="post">
    <legend>Add a new note</legend>
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title"/>
    </div>
    <div class="form-group">
      <label for="content">Content:</label>
      <textarea id="content" name="content"></textarea>
    </div>
    <div class="form-group">
      <label for="checklist_items">Checklist items:</label>
      <input type="text" id="checklist_items" name="checklist_items"
             placeholder="comma,separated,values"/>
    </div>
    <div class="form-group">
      <button type="button">Save note</button>
    </div>
  </form>
  <div id="notes">
  </div>
</div>
