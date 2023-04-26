process.on('unhandledRejection', (reason: Error | any) => {
    console.error(`Unhandled Rejection: ${reason.message || reason}`);

    throw new Error(reason.message || reason);
  });