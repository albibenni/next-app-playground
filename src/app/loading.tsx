import React from 'react';

export default function Loading() {
  return (
    <div className="d-block m-auto">
      <strong>Loading...</strong>
      <div
        className="spinner-border m-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}
