import React from 'react';
import ChangeUsername from '_components/organisms/ChangeUsername';
import ChangePassword from '_components/organisms/ChangePassword';
import MultiFactorSetup from '../../../organisms/MultiFactorSetup';

export default function Account() {
  return (
    <div className="account-settings">
      <ChangeUsername />
      <ChangePassword />
      <MultiFactorSetup />
    </div>
  );
}
