import { gql } from 'apollo-server-core';
export const apiFiltersTypeDefs = gql`
  input ApiFilterInput {
    _sort: String
    _order: ApiFilterOrderEnum
    _start: Int
    _limit: Int
  }

  enum ApiFilterOrderEnum {
    ASC
    DESC
  }
`;
