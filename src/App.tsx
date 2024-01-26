import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Intro } from './components/Intro/Intro.js';
import { Login } from './components/Login/Login';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Workspace } from './components/Workspace/Workspace';
import { CreateQuiz } from './components/CreateQuiz/CreateQuiz';
import { Workspace_new } from './components/Workspace_new/Workspace_new';
import { Splash } from './components/Splash/Splash';
import { Question } from './components/Question/Question';
import { Result } from './components/Result/Result';
import { AnswerQuiz } from './components/AnswerQuiz/AnswerQuiz';
import { AnswerQuiz2 } from './components/AnswerQuiz2/AnswerQuiz2';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/workspace-new" element={<Workspace_new />} />
        <Route path="/start-quiz" element={<Splash />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/answer-quiz" element={<AnswerQuiz />} />
        <Route path="/answer-quiz1" element={<AnswerQuiz2 />} />
      </Routes>
    </Router>
  );
});
