import { useCallback, useEffect, useState } from "react";

import {
  getRemoteConfig,
  getString,
  fetchAndActivate,
} from "firebase/remote-config";
import * as S from "./styles";

interface IRulesProps {
  show: boolean;
  onClose: () => void;
}

const Rules = ({ show, onClose }: IRulesProps) => {
  const [rules, setRules] = useState({ __html: "" });

  const loadRules = useCallback(async () => {}, []);

  useEffect(() => {
    loadRules();
  }, [loadRules]);

  return (
    <>
      {show && (
        <S.RulesBackground>
          <S.RulesContainer>
            <S.RulesText dangerouslySetInnerHTML={rules}></S.RulesText>
            <S.OkButton onClick={onClose}>OK</S.OkButton>
          </S.RulesContainer>
        </S.RulesBackground>
      )}
    </>
  );
};

export default Rules;
