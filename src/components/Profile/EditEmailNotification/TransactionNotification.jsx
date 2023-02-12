import { useMutation } from "@apollo/client";
import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { GET_PROFILE } from "../../../apollo/Profile/getProfile";
import { TRANSACTION_NOTICES } from "../../../apollo/Profile/Notice/transactionsNotices";

const TransactionNotification = ({
  transactionNotice,
  setTransactionNotice,
}) => {
  const [transactionNotification, { client }] = useMutation(
    TRANSACTION_NOTICES,
    {
      context: { clientName: "profile" },
    }
  );

  const onClickTransactionNotice = async () => {
    setTransactionNotice(!transactionNotice);
    transactionNotification({
      variables: {
        input: {
          transactionsEmailNotifications: !transactionNotice,
          transactionsPushNotifications: !transactionNotice,
        },
      },
    });
    await client.refetchQueries({
      include: [GET_PROFILE],
    });
  };

  return (
    <div className="flex flex-row items-center justify-between border-b border-[#424659] pb-[20px] mb-[20px]">
      <p className="text-[#F0F0F0] text-[16px] leading-[20px] font-normal">
        Transaction notifications
      </p>
      <div className="flex flex-row gap-[18px]">
        <Checkbox
          isChecked={transactionNotice}
          size="lg"
          onChange={onClickTransactionNotice}
        />
      </div>
    </div>
  );
};

export default TransactionNotification;
