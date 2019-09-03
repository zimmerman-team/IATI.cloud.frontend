import { OrganisationFragment } from 'app/modules/QueryBuilder/steps/organisation';
import { AdditionalFiltersLayout } from 'app/modules/QueryBuilder/steps/additional-filters/layout';
import { OutputFormatLayout } from 'app/modules/QueryBuilder/steps/output-format/layout';
import { ResultsLayout } from 'app/modules/QueryBuilder/steps/results/layout';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { useColorlibStepIconStyles } from 'app/modules/QueryBuilder/style';
import clsx from 'clsx';
import styled from 'styled-components';
import Step from '@material-ui/core/Step';
import { StepLabel } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import React from 'react';
import { ResultsSubModule } from 'app/modules/QueryBuilder/steps/results';
import { OutputFormatSubModule } from 'app/modules/QueryBuilder/steps/output-format';
import { AdditionalFiltersSubModule } from 'app/modules/QueryBuilder/steps/additional-filters';

export function getSteps() {
  return ['Core filters', 'Additional filters', 'Output format', 'Results'];
}

export function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    ></div>
  );
}

export function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <OrganisationFragment />;
    case 1:
      return <AdditionalFiltersSubModule />;
    case 2:
      return <OutputFormatSubModule />;
    case 3:
      return <ResultsSubModule />;
    default:
      return 'Unknown step';
  }
}

export const CustomStepLabel = styled(StepLabel)`
  &&& {
    cursor: pointer;
    user-select: none;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 35px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.15px;
    text-align: center;

    & [class*='MuiStepLabel-label'] {
      color: #ccc;
    }

    & [class*=' MuiStepLabel-active'] {
      color: black;
    }
  }
`;
export const CustomStep = styled(Step)`
  &&& {
    padding: 0 !important;

    & [class*='MuiStep-horizontal'] {
      padding: 0 !important;
    }
  }
`;
export const CustomStepper = styled(Stepper)`
  &&& {
    padding: 0;

    & [class*='MuiStepConnector-root '] {
      visibility: hidden;
      overflow: hidden;
    }
  }
`;
