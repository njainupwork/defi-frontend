import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTable, Button, ChevronUpIcon, ColumnType } from '@doodaswap/uikit'
import { useTranslation } from 'contexts/Localization'

import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  userDataReady: boolean
  sortColumn?: string
}

const Container = styled.div`
  filter: ${({ theme }) => theme.card.dropShadow};
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  margin: 16px 0px;
`

const TableWrapper = styled.div`
  overflow: visible;
  scroll-margin-top: 64px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const TableBody = styled.tbody`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`
const TableHead = styled.thead`
  &tr {
    td {
      color: red;
    }
  }
`

const TableContainer = styled.div`
  position: relative;
`
const StyledTh = styled.th`
  height: 4rem;
  text-align: left;
  border-bottom: 1px solid black;
  // background: red;
  padding-left: 1rem;
  padding-top: 1.5rem;
  margin-right: 2rem;
`
const ThContainer = styled.div`
  background: red;
`
const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`
const StyledThTr = styled(StyledTr)`
  height: 4rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
  td {
    padding-top: 1.2rem;
    color: #4d5560;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.8px;
    color: #4d5560;
    padding-left: 1.1rem;
  }
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const FarmTable: React.FC<ITableProps> = (props) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { data, columns, userDataReady } = props
  console.log('Hey data before sending to useTable', data)
  const { rows } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })

  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Container id="farms-table">
      <TableContainer>
        <TableWrapper ref={tableWrapperEl}>
          <StyledTable>
            <TableHead>
              <StyledThTr>
                {tableTh.map((thRow) => (
                  <td>{thRow}</td>
                ))}
              </StyledThTr>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return <Row {...row.original} userDataReady={userDataReady} key={`table-row-${row.id}`} />
              })}
            </TableBody>
          </StyledTable>
        </TableWrapper>
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {t('To Top')}
            <ChevronUpIcon color="doodaPrimary" />
          </Button>
        </ScrollButtonContainer>
      </TableContainer>
    </Container>
  )
}
const tableTh = ['페어명', '예상 연 수익률', '예치 자산', 'DOODA 보상', '']

export default FarmTable
