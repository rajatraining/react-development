import DataTable from 'react-data-table-component';
import React    from "react";


const data = [{ id: 1, title: 'DataTable in ReactJS', year: '2021' } ];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

class BooksDataTable extends React.Component {
  render() {
    return (
      <DataTable title="YourBlogCoach" columns="{columns}" data="{data}"></DataTable>
    )
  }
}
export default BooksDataTable;