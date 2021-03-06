import RaisedButton from 'material-ui/RaisedButton';

import React from 'react';
import manifest from '../manifest.js';

export default ({
  bucketHandleChecked,
  selectedBucket,
  searchHandleSubmit,
  searchHandleChange,
}) => (
  <div className="menuBar">
    <div className="headerMenu">
      <h1 className="header"> Sync-Gateway-SlipCover Open Source </h1>
    </div>
    <div className="menuRow">
      {/* Buckets dropdown menu */}
      <div className="bucket-box">
        <select
          className="bucketSelectList"
          onChange={e => {
            bucketHandleChecked(e);
          }}
          value={selectedBucket}
        >
          <option>-- Select Bucket --</option>
          {manifest.bucket.map(m => (
            <option key={m.toString()} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* search document id */}
      <div className="search">
        <input
          className="label"
          type="text"
          name="name"
          placeholder="Document ID"
          onChange={searchHandleChange}
        />
        <RaisedButton
          backgroundColor="#4CAF50"
          onClick={searchHandleSubmit}
          label="Search"
        />
      </div>
    </div>
  </div>
);
