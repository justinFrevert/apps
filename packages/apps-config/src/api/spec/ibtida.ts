// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
    types: [
        {
            // on all versions
            minmax: [0, undefined],
            types: {
                ByteVector: 'Vec<u8>',
                ClassData: {},
                ClassId: 'u32',
                ClassInfo: {
                    data: 'ClassData',
                    metadata: 'Vec<u8>',
                    owner: 'AccountId',
                    total_issuance: 'TokenId'
                },
                ClassInfoOf: 'ClassInfo',
                PendingNft: {
                    account_id: 'AccountId',
                    class_id: 'ClassId',
                    token_data: 'TokenData'
                },
                PendingNftOf: 'PendingNft',
                TokenByOwnerData: {
                    percent_owned: 'u8'
                },
                TokenData: {
                    dna: 'ByteVector'
                },
                TokenId: 'u32',
                TokenInfo: {
                    data: 'TokenData',
                    metadata: 'Vec<u8>',
                    owners: 'Vec<AccountId>'
                },
                TokenInfoOf: 'TokenInfo'
            }
        }
    ]
};

export default definitions;