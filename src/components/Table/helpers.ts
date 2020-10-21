export const columns = [
  { name: 'revision', title: 'revision' },
  { name: 'revstmp', title: 'revstmp' },
  { name: 'user_id', title: 'user_id' },
  { name: 'user_email', title: 'user_email' },
  { name: 'user_name', title: 'user_name' },
  { name: 'well_id', title: 'well_id' },
  { name: 'well_name', title: 'well_name' },
  { name: 'well_type', title: 'well_type' },
  { name: 'changes_summary', title: 'changes_summary' },
]

export const rowsPerPageOptions = [5, 10, 25, 50]

export const rowsSelector = () => {}

export const mock = [
  {
    revision: 646119,
    revstmp: '2020-08-25T09:34:32.670+0000',
    user_id: 136,
    user_email: 'am+pi@rogii.com',
    user_name: 'A M',
    well_id: 'cbaa25da-b044-4afc-b074-d56422330740',
    well_name: 'well_220-test',
    well_type: 'laterals',
    changes_summary: 'DELETE dynamic_logs "Dynamic RHOB"',
  },
  {
    revision: 646118,
    revstmp: '2020-08-25T09:34:24.067+0000',
    user_id: 136,
    user_email: 'am+pi@rogii.com',
    user_name: 'A M',
    well_id: 'cbaa25da-b044-4afc-b074-d56422330740',
    well_name: 'well_220-test',
    well_type: 'laterals',
    changes_summary: 'DELETE dynamic_logs "Dynamic Copy of GR"',
  },
  {
    revision: 646117,
    revstmp: '2020-08-25T09:34:20.136+0000',
    user_id: 136,
    user_email: 'am+pi@rogii.com',
    user_name: 'A M',
    well_id: 'cbaa25da-b044-4afc-b074-d56422330740',
    well_name: 'well_220-test',
    well_type: 'laterals',
    changes_summary: 'DELETE dynamic_logs "Dynamic Copy of GR"',
  },
  {
    revision: 646116,
    revstmp: '2020-08-25T09:34:17.160+0000',
    user_id: 136,
    user_email: 'am+pi@rogii.com',
    user_name: 'A M',
    well_id: 'cbaa25da-b044-4afc-b074-d56422330740',
    well_name: 'well_220-test',
    well_type: 'laterals',
    changes_summary: 'DELETE dynamic_logs "Dynamic RHOB"',
  },
  {
    revision: 646115,
    revstmp: '2020-08-25T09:34:14.082+0000',
    user_id: 136,
    user_email: 'am+pi@rogii.com',
    user_name: 'A M',
    well_id: 'cbaa25da-b044-4afc-b074-d56422330740',
    well_name: 'well_220-test',
    well_type: 'laterals',
    changes_summary: 'DELETE dynamic_logs "Dynamic Copy of GR"',
  },
]
